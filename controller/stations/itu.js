import transmissionData from '../TransmissionData';

export var itu = {
    name: "ITU TS",
    id: "itu",
    is132: true,
    lines: [
        //Added by me
        {
            name: "b1i",
            id: "b1i",
            connectionRoot: false,
            transmissionData
        },

        {
            name: "i1b",
            id: "i1b",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'i1b-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },

        {
            name: "i1e",
            id: "i1e",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'i1e-v-0',
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