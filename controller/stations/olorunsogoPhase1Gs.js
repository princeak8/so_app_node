import transmissionData from '../TransmissionData';

export var olorunsogoPhase1Gs = {
    name: "Olorunsogo Phase1",
    id: "olorunsogoPhase1Gs",
    gs: true,
    gsId: 'olorunsogoGasPs',
    has132: false,
    lines: [
        {
            name: "r2a",
            id: "r2a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "r1w",
            id: "r1w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'r1w-v-0',
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