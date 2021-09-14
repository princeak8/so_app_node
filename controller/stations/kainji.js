import transmissionData from '../TransmissionData';

export var kainji = {
    name: "KAINJI TS",
    id: "kainjiTs",
    lines: [
        {
            name: "k3r",
            id: "k3r",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k1f",
            id: "k1f",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k1j",
            id: "k1j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k1j-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "k2j",
            id: "k2j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k2j-v-0',
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