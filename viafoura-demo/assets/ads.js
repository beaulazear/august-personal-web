/**
 * Viafoura Integrated Ads, using Google Ad Manager (GPT).
 * Docs: https://documentation.viafoura.com/docs/ads-in-conversations
 *
 * Viafoura widgets don't render ads themselves. When a widget has an ad
 * position ready, it fires an event on the 'vf-ads' channel with the id of an
 * empty element. The handler below defines a GPT slot on that element and
 * fetches an ad into it.
 *
 * Nothing fires until Viafoura switches ads on for each widget on this site and
 * sets the provider to "Google Tag" (both are set by Viafoura support, not in
 * the markup). With the Google Tag provider, the widget only shows the slot
 * once GAM reports that an ad rendered in it, so unfilled slots stay hidden.
 *
 * AD_UNIT is Google's public sample ad unit, which serves test creatives on any
 * domain. A publisher replaces it with their own network code and ad unit path.
 */
(function () {
  'use strict';

  var AD_UNIT = '/6355419/Travel/Europe';

  // 1. Initialize GPT. disableInitialLoad() means nothing is fetched until a
  //    Viafoura widget asks for an ad and we call refresh() on that slot.
  var gpt = document.createElement('script');
  gpt.async = true;
  gpt.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
  document.head.appendChild(gpt);

  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    googletag.pubads().enableSingleRequest();
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();
  });

  function log(message, data) {
    if (window.hlLog) window.hlLog(message, data);
  }

  // Every position here requests a 300x250. Engagement Starter, Trending and
  // Standalone positions are limited to 300x250; comment and live blog
  // positions can also take a size mapping (see the docs) to serve mobile
  // banners on phones, if the ad unit has those sizes.
  var SIZE = [300, 250];

  // 2. Handler: one per ad product, all sharing the same slot logic.
  function makeHandler(product) {
    return function (slotName) {
      log('Ad requested: ' + product, { slot: slotName, ad_unit: AD_UNIT });

      googletag.cmd.push(function () {
        // A re-rendered widget can reuse an element id, so clear any old slot.
        var stale = googletag.pubads().getSlots().filter(function (slot) {
          return slot.getSlotElementId() === slotName;
        });
        googletag.destroySlots(stale);

        var slot = googletag.defineSlot(AD_UNIT, SIZE, slotName);
        if (!slot) return;
        slot.setTargeting('vf_product', product).addService(googletag.pubads());

        googletag.display(slotName);
        googletag.pubads().refresh([slot]);
      });
    };
  }

  googletag.cmd.push(function () {
    googletag.pubads().addEventListener('slotRenderEnded', function (event) {
      log(event.isEmpty ? 'Ad slot empty' : 'Ad rendered', {
        slot: event.slot.getSlotElementId(),
        size: event.size
      });
    });
  });

  // 3. Subscribe to the Viafoura ad events once the SDK is ready.
  window.vfQ = window.vfQ || [];
  window.vfQ.push(function () {
    window.vf.$subscribe('vf-ads', 'requestCommentAd', makeHandler('conversations'));
    window.vf.$subscribe('vf-ads', 'requestLiveblogAd', makeHandler('liveblog'));
    window.vf.$subscribe('vf-ads', 'requestConversationStarter', makeHandler('engagement-starter'));
    window.vf.$subscribe('vf-ads', 'requestContentRecirculationAd', makeHandler('trending'));
    window.vf.$subscribe('vf-ads', 'requestStandaloneAd', makeHandler('standalone'));
  });
})();
