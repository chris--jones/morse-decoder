interface Window {
  webkitAudioContext: typeof AudioContext
  webkitOfflineAudioContext: typeof OfflineAudioContext
}

type Characters = Record<string, Record<string, string>>

interface Oscillator {
  type?: OscillatorType;
  frequency?: number;
}

interface AudioOptions {
  wpm?: number;
  unit: number;
  fwUnit: number;
  volume: number;
  oscillator: Oscillator;
  onstatechange?: ((this: BaseAudioContext, ev: Event) => any) | null;
  onstarted?: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
  onstopped?: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
}

interface Options {
  dash: string;
  dot: string;
  space: string;
  separator: string;
  invalid: string;
  priority: number;
  audio?: AudioOptions;
}
