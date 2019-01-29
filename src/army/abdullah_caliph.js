import _attr from "./_attr";

export default [
    {
        name: 'Level 1',
        list: [
            
        ]
    },
    {
        name: 'Level 2',
        list: [
            
        ]
    },
    {
        name: 'Level 3',
        list: [
            
        ]
    },
    {
        name: 'Level 4',
        list: [
            
        ]
    },
    {
        name: 'Level 5',
        list: [
            {
                name: 'Battle Prophet',
                size: 1.05,
                folder: 'battle_prophet',
                hp: 100,
                atk_ranged: {
                    type: 'light',
                    damage: 60
                },
                atk_malee: {
                    type: 'malee',
                    damage: 60
                },
                defend: {
                    armor: 0,
                    avoid: {
                        malee: '50%',
                        ranged: '70%'
                    },
                    fire: '50%',
                    ice: '20%',
                    shadow: '90%',
                    light: '0%',
                    poison: '30%',
                    mind: '100%',
                    thunder: '-20%'
                },
                attr: [
                    _attr.al_rasheed_gene,
                    _attr.prophet_of_world,
                    _attr.killer_of_shadow
                ]
            }
        ]
    }
]