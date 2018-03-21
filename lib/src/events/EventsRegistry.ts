import { EventSubscription, NativeEventsReceiver } from '../adapters/NativeEventsReceiver';

export class EventsRegistry {
  private nativeEventsReceiver: NativeEventsReceiver;

  constructor(nativeEventsReceiver: NativeEventsReceiver) {
    this.nativeEventsReceiver = nativeEventsReceiver;
  }

  public onAppLaunched(callback: () => void): EventSubscription {
    return this.nativeEventsReceiver.registerOnAppLaunched(callback);
  }

  public componentDidAppear(callback: (componendId: string, componentName: string) => void): EventSubscription {
    return this.nativeEventsReceiver.registerComponentDidAppear(callback);
  }

  public componentDidDisappear(callback: (componendId: string, componentName: string) => void): EventSubscription {
    return this.nativeEventsReceiver.registerComponentDidDisappear(callback);
  }

  public onNavigationInteraction(callback: (name: string) => void): EventSubscription {
    return this.nativeEventsReceiver.registerOnNavigationInteraction(callback);
  }
}