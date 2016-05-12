# chrome-extension-starter

A starter kit for Chrome extension and theme development.

## Google Groups

- [Chromium-Extensions-Announce](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions)
- [Chromium-Apps-Announce](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-apps)
- [Other Chromium group links](https://www.chromium.org/developers/discussion-groups)

## Official Documentation

This is a directory tree of links to various Chrome developer pages. 

- [Extensions](https://developer.chrome.com/extensions)
    - Learn Basics
        - [Overview](https://developer.chrome.com/extensions/overview)
        - [Hosting Changes](https://developer.chrome.com/extensions/hosting_changes)
        - [Extension Quality Guidelines FAQ](https://developer.chrome.com/extensions/single_purpose)
        - [Event Pages](https://developer.chrome.com/extensions/event_pages)
        - [Content Scripts](https://developer.chrome.com/extensions/content_scripts)
        - [activeTab Permissions](https://developer.chrome.com/extensions/activeTab)
        - [What's New](https://developer.chrome.com/extensions/whats_new)
    - [Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted)
    - [Sample Extensions](https://developer.chrome.com/extensions/samples)
    - Develop Extensions
        - [Accessibility](https://developer.chrome.com/extensions/a11y)
        - [Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy)
        - [Cross-Origin XHR](https://developer.chrome.com/extensions/xhr)
        - [Debugging](https://developer.chrome.com/extensions/tut_debugging)
        - [Internationalization](https://developer.chrome.com/extensions/i18n)
        - [Message Passing](https://developer.chrome.com/extensions/messaging)
        - [Native Messaging](https://developer.chrome.com/extensions/nativeMessaging)
        - [Migrate to Manifest 2](https://developer.chrome.com/extensions/tut_migration_to_manifest_v2)
        - [OAuth](https://developer.chrome.com/extensions/tut_oauth)
        - [Options](https://developer.chrome.com/extensions/options)
        - [Options v2](https://developer.chrome.com/extensions/optionsV2)
    - Distribute Extensions
        - [Hosting](https://developer.chrome.com/extensions/hosting)
        - [Packaging](https://developer.chrome.com/extensions/packaging)
        - [One-Time Payments](https://developer.chrome.com/webstore/one_time_payments)
        - [Autoupdating](https://developer.chrome.com/extensions/autoupdate)
        - [Other Deployment Options](https://developer.chrome.com/extensions/external_extensions)
        - [Analytics](https://developer.chrome.com/apps/analytics)
        - [Publishing Themes](https://developer.chrome.com/extensions/themes)
    - [Chrome Platform APIs](https://developer.chrome.com/extensions/api_index)
        - [Javascript APIs](https://developer.chrome.com/extensions/api_index)
        - [Manifest File Format](https://developer.chrome.com/extensions/manifest)
        - [Web APIs](https://developer.chrome.com/extensions/api_other)
        - [Permissions Warnings](https://developer.chrome.com/extensions/permission_warnings)
        - [Optional Permissions](https://developer.chrome.com/extensions/permissions)
        - [Match Patterns](https://developer.chrome.com/extensions/match_patterns)
    - [Help](https://developer.chrome.com/extensions/faq)
        - [FAQ](https://developer.chrome.com/extensions/faq)
        - [Google Groups](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions)
        - [Stack Overflow](http://stackoverflow.com/tags/google-chrome-extension/info)

## Developing

The official documentation is quite extensive and up to date. Some recommendations:

- The tutorials and docs to guide the learning process for developing extensions is ordered logically in a top down format. Start at the top and drill into details as you move down.
- The [Sample Extensions](https://developer.chrome.com/extensions/samples) page is a great resource that provides many working extension examples. The main page is a long list so it's best to choose a few of the Chrome APIs you would like to work with and narrow down the search.



## Folders


### ext-samples

All extension samples (as zip files) are available [here](https://developer.chrome.com/extensions/samples). A few that I found useful are included in the ext-samples folder. The API calls used in each sample are noted in parentheses.

- [NTP prototyping extension (magic8ball)](https://developer.chrome.com/extensions/samples#search:topsites) - A sample for creating New Tab extensions. (topSites)
- [Google Mail Checker (gmail)](https://developer.chrome.com/extensions/samples#search:mail) - A sample for Google Mail Checker. (alarms, browserAction, i18n, runtime, tabs, webNavigation, windows)
- [My Bookmarks (basic-bookmarks)](https://developer.chrome.com/extensions/samples#search:bookmarks) - A sample using the Bookmarks API. (bookmarks, tabs)


### ext-template

General template for Chrome extensions.
- manifest.json
- icon.png
- popup.html
- popup.js

### theme-template

Documentation on creating themes is a bit limited so referencing the Chromium (which Chrome is built on) source is helpful https://src.chromium.org/viewvc/chrome/trunk/src/chrome/browser/themes/
- manifest.json
- images


## Samples

### theme-dark-v1

The published [Dark Theme - Charcoal](https://chrome.google.com/webstore/detail/dark-theme-charcoal/bookmfpildhgmigenbeeonhljjbgfple) is available on the Chrome Web Store.

![charcoal-theme-screenshot.png](/images/charcoal-theme-screenshot.png?raw=true)


### theme-unicorn-v1

The published [Unicorn Theme](https://chrome.google.com/webstore/detail/unicorn-theme/cmocghjdibclgmdlkmmdpinlmfandkfh) is available on the Chrome Web Store.

![unicorn-theme-screenshot.png](/images/unicorn-theme-screenshot.png?raw=true)


### Not Launched

The following themes are not yet on the Chrome Web Store:
- theme-google-pastel
- theme-green-mint-v1
- theme-blue-mint-v1

