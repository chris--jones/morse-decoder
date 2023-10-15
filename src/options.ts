const getOptions = (opts: Partial<Options> = {}): Options => {
  const options: Options = {
    ...opts,
    dash: opts.dash || '-',
    dot: opts.dot || '.',
    space: opts.space || '/',
    separator: opts.separator || ' ',
    invalid: opts.invalid || '#',
    priority: opts.priority || 1,
    audio: {
      wpm: opts.audio.wpm, // words per minute - PARIS method used in favour of unit/fwUnit options
      unit: opts.audio.unit || 0.08, // period of one unit, in seconds, 1.2 / c where c is speed of transmission, in words per minute
      fwUnit: opts.audio.fwUnit || opts.audio.unit || 0.08, // Farnsworth unit to control intercharacter and interword gaps
      volume: opts.audio.volume || 100,
      oscillator: {
        ...opts.audio.oscillator,
        type: opts.audio.oscillator?.type || 'sine', // sine, square, sawtooth, triangle
        frequency: opts.audio.oscillator?.frequency || 500 // value in hertz
      },
      onstarted: opts.audio.onstarted || null,
      onstopped: opts.audio.onstopped || null, // event that fires when the tone has stopped playing
      onstatechange: opts.audio.onstatechange || null
    }
  };
  return options;
};

export default getOptions;
