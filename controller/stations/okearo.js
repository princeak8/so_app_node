import transmissionData from '../TransmissionData';

export var okearo = {
    name: "Oke-Aro TS",
    id: "okearo",
    lines: [
        {
            name: "k7w",
            id: "k7w",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k8w",
            id: "k8w",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "n7k",
            id: "n7k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'n7k-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "n8k",
            id: "n8k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'n8k-v-0',
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