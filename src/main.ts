import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/lint';
import 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript';
import { AppModule } from './app/app.module';
import './polyfills';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
