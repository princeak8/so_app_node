import transmissionData from '../TransmissionData';


export var kebbi = {
    name: "KEBBI TS",
    id: "kebbi",
    lines: [
        {
            name: "k3r",
            id: "k3r",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k3r-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        }
    ]
}