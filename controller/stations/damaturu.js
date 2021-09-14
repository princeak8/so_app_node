import transmissionData from '../TransmissionData';

export var damaturu = {
    name: "DAMATURU TS",
    id: "damaturu",
    lines: [
        {
            name: "e1d",
            id: "e1d",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "d1l",
            id: "d1l",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd1l-h-0',
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