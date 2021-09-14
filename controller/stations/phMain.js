import transmissionData from '../TransmissionData';

export var phMain = {
    name: "PH Main TS",
    id: "phMain",
    is132: true,
    lines: [
        //Added by me
        {
            name: "f4p",
            id: "f4p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f4p-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "f5p",
            id: "f5p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'f5p-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
    ]
};