import transmissionData from '../TransmissionData';

export var egbinGs = {
    name: "EGBIN GS",
    id: "egbinGs",
    gs: true,
    gsId: 'egbinPs',
    has132: false,
    lines: [
        {
            name: "n7k",
            id: "n7k",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "n8k",
            id: "n8k",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "n6w",
            id: "n6w",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "b6n",
            id: "b6n",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'b6n-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'b6n-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'up'
                },
            ],
            transmissionData
        },
        {
            name: "n3j",
            id: "n3j",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "n4j",
            id: "n4j",
            connectionRoot: false,
            transmissionData
        }
    ]
};