import transmissionData from '../TransmissionData';

export var katampe = {
    name: "KATAMPE TS",
    id: "katampe",
    lines: [
        {
            name: "r4b",
            id: "r4b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "g5b",
            id: "g5b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'g5b-h-0',
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