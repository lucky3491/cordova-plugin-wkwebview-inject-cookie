# cordova-plugin-wkwebview-cookie-sync

When switching to wkWebView in Cordova for iOS some plugins have the known issue that cookies won't be used properly on the very first start of the application, or every time on iOS Devices. In particular session cookies. This is due to a [missing proper sync between the underlying WKHTTPCookieStore and the WebView].

While this issue could probably only get fixed by Apple in the first place, there is a simple workaround available to get it working: Once a dummy cookie is placed into the WKHTTPCookieStore manually, the syncronization gets triggered (started) and it won't bug you ever again.

Unfortunately this only works for IOS real devices not for simulators.
This plugin is supported with cordova-plugin-webview-engine

Command `cordova plugin add https://github.com/lucky3491/cordova-plugin-wkwebview-inject-cookie`

## Usage
Ionic 1
```
cookiesArray = [{
  domain: 'abc.xyz',
  name: 'cookie name',
  path: '/',
  value: 'cookie string'
},{...}]

wkWebView.injectCookie(cookiesArray);

```
ionic 2 plus

#app.component.ts declare wkWebView:
```
declare var wkWebView: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})

initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // This syncs the cookies on IOS devices when the app initializes.
      // This ensures that the login response cookie will be sent with all subsequent requests.
      if (this.platform.is('ios')) {
        wkWebView.injectCookie('YOUR API ENDPOINT HERE');
      }

```


You have to get cookies from api and send to this plugin 

When you want to update cookies the you have to send cookies array to the plugin

This plugin is supported on all ios devices. 
