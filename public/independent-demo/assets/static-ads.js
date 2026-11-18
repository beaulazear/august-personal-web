/**
 * Static ad creatives in Viafoura Conversations, for the Independent mock.
 *
 * 1. Primary path (Viafoura's integrated ads): when the widget has an ad
 *    position ready it fires 'vf-ads' / 'requestCommentAd' with the id of an
 *    empty element. We put one of our creatives in it. This needs ads switched
 *    on for Conversations on this site, with the provider set to "Custom" so
 *    the slot is shown as soon as it is requested (with "Google Tag" the slot
 *    stays hidden until Google Ad Manager reports a render, which never happens
 *    here).
 *
 * 2. Fallback (so the demo always shows an ad): if no requested slot is
 *    visible a few seconds after comments render, insert the creative after
 *    the 3rd top-level comment ourselves, the same way the OpenWeb mock did.
 *    A MutationObserver puts it back if the widget re-renders the list.
 *
 * Add more objects to CREATIVES to rotate through them, one per slot.
 */
(function () {
  'use strict';

  var CREATIVES = [
    {
      src: 'assets/dogstrust-ad.png',
      alt: 'Dogs Trust: A dog is for life, not just Christmas. Learn more.',
      href: 'https://www.dogstrust.org.uk/'
    }
  ];

  var CONTAINER_ID = 'viafoura-conversation-id';
  var FALLBACK_ID = 'indy-fallback-ad';
  var FALLBACK_AFTER = 3;       // insert after this many top-level comments
  var FALLBACK_WAIT_MS = 4000;  // grace period for Viafoura's own slots

  var served = 0;
  var requestedSlots = [];
  var firstCommentsAt = 0;

  function adMarkup(creative) {
    return '<div class="indy-comment-ad__label">Advertisement</div>' +
      '<a href="' + creative.href + '" target="_blank" rel="noopener sponsored">' +
      '<img src="' + creative.src + '" alt="' + creative.alt + '" width="1220" height="328" loading="lazy">' +
      '</a>';
  }

  function nextCreative() {
    return CREATIVES[served++ % CREATIVES.length];
  }

  function isVisible(el) {
    return !!el && el.isConnected && el.getClientRects().length > 0 && el.offsetHeight > 0;
  }

  function anyRequestedSlotVisible() {
    return requestedSlots.some(function (id) { return isVisible(document.getElementById(id)); });
  }

  // --- 1. Viafoura integrated ad positions ---------------------------------
  function fillSlot(slotId) {
    var el = document.getElementById(slotId);
    if (!el) return;
    requestedSlots.push(slotId);
    var wrapper = document.createElement('div');
    wrapper.className = 'indy-comment-ad';
    wrapper.innerHTML = adMarkup(nextCreative());
    el.innerHTML = '';
    el.appendChild(wrapper);
    // Once a real slot shows, the fallback is no longer needed.
    setTimeout(check, 1500);
  }

  window.vfQ = window.vfQ || [];
  window.vfQ.push(function () {
    window.vf.$subscribe('vf-ads', 'requestCommentAd', fillSlot);
  });

  // --- 2. Fallback insertion ------------------------------------------------
  function topLevelComments(root) {
    var all = root.querySelectorAll('article.vf3-comment');
    return Array.prototype.filter.call(all, function (a) {
      return !a.parentElement.closest('article.vf3-comment');
    });
  }

  function check() {
    var root = document.getElementById(CONTAINER_ID);
    if (!root) return;
    var existing = document.getElementById(FALLBACK_ID);

    if (anyRequestedSlotVisible()) {
      if (existing) existing.remove();
      return;
    }
    if (existing && existing.isConnected) return;

    var comments = topLevelComments(root);
    if (!comments.length) return;
    if (!firstCommentsAt) firstCommentsAt = Date.now();
    if (Date.now() - firstCommentsAt < FALLBACK_WAIT_MS) {
      setTimeout(check, FALLBACK_WAIT_MS);
      return;
    }

    var anchor = comments[Math.min(FALLBACK_AFTER, comments.length) - 1];
    var item = anchor.closest('li') || anchor;
    var ad = document.createElement(item.tagName === 'LI' ? 'li' : 'div');
    ad.id = FALLBACK_ID;
    ad.className = 'indy-comment-ad';
    ad.innerHTML = adMarkup(CREATIVES[0]);
    item.insertAdjacentElement('afterend', ad);
  }

  var pending;
  function schedule() {
    clearTimeout(pending);
    pending = setTimeout(check, 500);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById(CONTAINER_ID);
    if (!root) return;
    new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  });
})();
