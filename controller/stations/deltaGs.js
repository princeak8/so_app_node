import transmissionData from '../TransmissionData';

export var deltaGs = {
    name: "DELTA GS",
    id: "deltaGs",
    gs: true,
    gsId: 'deltaPs',
    has132: false,
    lines: [
        {
            name: "g3b",
            id: "g3b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "s4g",
            id: "s4g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 's4g-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        }
    ]
};