/**
 * Viafoura Demo Site Helper Script
 * Loaded synchronously in <head> on every page
 */

(function() {
  'use strict';

  // 1. Set og:url if not already present
  function ensureOgUrl() {
    const existingOgUrl = document.querySelector('meta[property="og:url"]');
    if (!existingOgUrl) {
      const ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.content = location.origin + location.pathname + location.search;
      document.head.appendChild(ogUrl);
    }
  }

  // 2. Check if running on approved domain
  function checkHost() {
    const approvedDomain = 'www.beaulazear.com';
    const currentHost = location.hostname;

    // Check if we're on file://, localhost, or wrong domain
    const isFile = location.protocol === 'file:';
    const isLocalhost = currentHost === 'localhost' || currentHost === '127.0.0.1';
    const isWrongDomain = currentHost !== approvedDomain;

    if (isFile || isLocalhost || isWrongDomain) {
      document.addEventListener('DOMContentLoaded', function() {
        const banner = document.createElement('div');
        banner.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; background: #ffc107; color: #000; padding: 12px 20px; text-align: center; z-index: 10000; font-family: sans-serif; font-size: 14px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);';

        let message = '⚠️ Viafoura will not load on this domain. ';
        if (isFile) {
          message += 'Viafoura does not support file:// protocol.';
        } else if (isLocalhost) {
          message += 'Viafoura does not support localhost.';
        } else {
          message += `Expected domain: ${approvedDomain}, but got: ${currentHost}`;
        }
        message += ' Please deploy to the approved domain.';

        banner.textContent = message;
        document.body.insertBefore(banner, document.body.firstChild);

        // Add padding to body so content isn't hidden
        document.body.style.paddingTop = banner.offsetHeight + 'px';
      });
    }
  }

  // 3. VF Events Debug Panel
  function createDebugPanel() {
    // Create panel HTML
    const panel = document.createElement('details');
    panel.style.cssText = 'position: fixed; bottom: 20px; left: 20px; z-index: 9999; background: #fff; border: 2px solid #333; border-radius: 4px; max-width: 400px; max-height: 500px; overflow: auto; font-family: monospace; font-size: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);';

    panel.innerHTML = `
      <summary style="padding: 8px 12px; cursor: pointer; background: #333; color: #fff; font-weight: bold; position: sticky; top: 0;">
        VF Events
      </summary>
      <div style="padding: 8px;">
        <div style="margin-bottom: 8px;">
          <button id="vf-log-page" style="margin-right: 4px; padding: 4px 8px; font-size: 11px;">Log Page</button>
          <button id="vf-log-user" style="margin-right: 4px; padding: 4px 8px; font-size: 11px;">Log User</button>
          <button id="vf-clear-log" style="padding: 4px 8px; font-size: 11px;">Clear</button>
        </div>
        <div id="vf-event-log" style="background: #f5f5f5; padding: 8px; border-radius: 3px; min-height: 100px; max-height: 350px; overflow-y: auto;"></div>
      </div>
    `;

    const logContainer = panel.querySelector('#vf-event-log');

    // Logging function
    function log(message, data) {
      const timestamp = new Date().toLocaleTimeString();
      const entry = document.createElement('div');
      entry.style.cssText = 'margin-bottom: 4px; padding: 4px; border-bottom: 1px solid #ddd; word-break: break-word;';
      // Build with textContent: event payloads contain user-generated content
      const time = document.createElement('strong');
      time.textContent = timestamp;
      entry.append(time, ': ' + message);
      if (data) {
        const pre = document.createElement('pre');
        pre.style.cssText = 'margin: 4px 0 0 0; font-size: 10px; background: #e0e0e0; padding: 4px; border-radius: 2px; overflow-x: auto;';
        pre.textContent = JSON.stringify(data, null, 2);
        entry.appendChild(pre);
      }
      logContainer.appendChild(entry);
      logContainer.scrollTop = logContainer.scrollHeight;
    }

    // Expose global log function
    window.hlLog = log;

    // Log initial page info
    document.addEventListener('DOMContentLoaded', function() {
      const containerId = document.querySelector('meta[name="vf:container_id"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      log('Page loaded', {
        container_id: containerId ? containerId.content : '(none)',
        og_url: ogUrl ? ogUrl.content : '(none)'
      });
    });

    // Button handlers
    panel.querySelector('#vf-log-page').addEventListener('click', function() {
      window.vfQ = window.vfQ || [];
      window.vfQ.push(function() {
        try {
          const pageContext = window.vf.context.get('page');
          log('Page context', pageContext);
        } catch (e) {
          log('Error getting page context', { error: e.message });
        }
      });
    });

    panel.querySelector('#vf-log-user').addEventListener('click', function() {
      window.vfQ = window.vfQ || [];
      window.vfQ.push(function() {
        try {
          const userContext = window.vf.context.get('user');
          log('User context', userContext);
        } catch (e) {
          log('Error getting user context', { error: e.message });
        }
      });
    });

    panel.querySelector('#vf-clear-log').addEventListener('click', function() {
      logContainer.innerHTML = '';
    });

    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(panel);
    });

    // Subscribe to all VF events
    window.vfQ = window.vfQ || [];
    window.vfQ.push(function() {
      const events = {
        'authentication': ['needed', 'login', 'logout', 'login-success', 'login-failure'],
        'user': ['loaded', 'updated'],
        'comment': ['created', 'updated', 'deleted', 'flagged'],
        'comment-reply': ['created'],
        'comments': ['loaded', 'sorted'],
        'liveblog': ['loaded', 'post-created', 'post-updated'],
        'livechat': ['loaded', 'message-sent'],
        'tray': ['open', 'close'],
        'vf-tray': ['opened', 'closed'],
        'vf-tray-trigger': ['clicked'],
        'user-notifications': ['loaded', 'updated'],
        'topics': ['followed', 'unfollowed'],
        'sharebar': ['shared'],
        'share-total': ['updated'],
        'vf-ads': ['request-sent', 'response-received', 'ad-displayed', 'ad-clicked', 'ad-error']
      };

      Object.keys(events).forEach(function(channel) {
        events[channel].forEach(function(event) {
          window.vf.$subscribe(channel, event, function(data) {
            log(`${channel} / ${event}`, data);
          });
        });
      });
    });
  }

  // Run on script load
  ensureOgUrl();
  checkHost();
  createDebugPanel();
})();
