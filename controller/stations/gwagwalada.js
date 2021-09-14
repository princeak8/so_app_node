import transmissionData from '../TransmissionData';

export var gwagwalada = {
    name: "GWAGWALADA TS",
    id: "gwagwalada",
    lines: [
        {
            name: "r5g",
            id: "r5g",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "g5b",
            id: "g5b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "l6g",
            id: "l6g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'l6g-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "l7g",
            id: "l7g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'l7g-h-0',
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