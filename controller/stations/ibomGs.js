import transmissionData from '../TransmissionData';

export var ibomGs = {
    name: "IBOM GS",
    id: "ibomGs",
    gs: true,
    gsId: 'ibomPs',
    has132: false,
    is132: false,
    lines: [
        //Added by me
        {
            name: "e1m",
            id: "e1m",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "e2m",
            id: "e2m",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "m1o",
            id: "m1o",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'm1o-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "m2o",
            id: "m2o",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'm2o-h-0',
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