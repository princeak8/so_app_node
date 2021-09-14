import transmissionData from '../TransmissionData';

export var sakete = {
    name: "SAKETE TS",
    id: "sakete",
    lines: [
        {
            name: "nw1bs",
            id: "nw1bs",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'nw1bs-h-0',
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