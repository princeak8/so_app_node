import transmissionData from '../TransmissionData';

export var fakun = {
    name: "FAKUN TS",
    id: "fakun",
    lines: [
        {
            connectionRoot: true,
            name: "k1f",
            id: "k1f",
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k1f-v-0',
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