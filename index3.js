
let choreographer = new Choreographer({
    animations: [
      {
        range: [5, 399],
        selector: '.lantern',
        type: 'change',
        style: 'transform:translateX',
        to: 1000,
        unit: 'px'
      },
      {
        range: [101, 290],
        selector: '.lantern2',
        type: 'change',
        style: 'transform:translateX',
        to: -1000,
        unit: 'px'
      },
      {
        range: [400, 650],
        selector: '#red-2',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [700, 1000],
        selector: '#red-3',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [900, 1450],
        selector: '#orange-1',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [1350, 1750],
        selector: '#orange-2',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [1650, 2100],
        selector: '#orange-3',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [2200, 2500],
        selector: '#yellow-1',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [2000, 2450],
        selector: '.leaf',
        type: 'change',
        style: 'transform:translateX',
        to: -500,
        unit: 'px'
      },
      {
        range: [2450, 2500],
        selector: '.leaf',
        type: 'scale',
        style: 'transform:rotate',
        from: 0,
        to: 360,
        unit: "deg"
      },
      {
        range: [2450, 2750],
        selector: '#yellow-2',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [2750, 3050],
        selector: '#yellow-3',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [2600, 3000],
        selector: '.sub',
        type: 'change',
        style: 'transform:translateX',
        to: -1000,
        unit: 'px'
      },
      {
        range: [2900, 3450],
        selector: '#green-1',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [3300, 3750],
        selector: '#green-2',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [3600, 4050],
        selector: '#green-3',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [4000, 4450],
        selector: '#blue-1',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [4400, 4750],
        selector: '#blue-2',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [4700, 5050],
        selector: '#blue-3',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [5000, 5450],
        selector: '#purple-1',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [5400, 5750],
        selector: '#purple-2',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [5400, 5700],
        selector: '#purple-3',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      }

    ]
  })

  window.addEventListener('scroll', () => {
    choreographer.runAnimationsAt(window.pageYOffset)
  })