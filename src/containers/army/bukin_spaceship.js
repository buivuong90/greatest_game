import C from "./_config";

export default [
    {
        name: 'Level 1',
        list: [
            {
                name: 'Rocket Launcher',
                size: 1.01,
                folder: 'wmt_39',
                health: C.base_health.human+C.armor.light
            },
            {
                name: 'Soldier',
                size: 1.01,
                folder: 'wmt_38',
                health: C.base_health.human+C.armor.light
            },
            {
                name: 'Flame Thrower',
                size: 1.02,
                folder: 'wmt_33',
                health: C.base_health.human+C.armor.light
            },
            {
                name: 'Commander',
                size: 1.01,
                folder: 'wmt_32',
                health: C.base_health.human+C.armor.light+C.shield.medium
            }
        ]
    },
    {
        name: 'Level 2',
        list: [
            {
                name: 'Axe Master',
                size: 1.07,
                folder: 'wmt_34',
                health: C.base_health.human+C.armor.light
            },
            {
                name: 'Spy',
                size: 1.03,
                folder: 'wmt_41',
                health: C.base_health.human_female+C.armor.medium
            },
            {
                name: 'Battle Troll',
                size: 1.2,
                folder: 'wmt_45',
                health: C.base_health.mountain_troll+C.armor.light
            }
        ]
    },
    {
        name: 'Level 3',
        list: [
            {
                name: 'Pike Master',
                size: 1.08,
                folder: 'wmt_35',
                health: C.base_health.human+C.armor.heavy+C.shield.medium
            },
            {
                name: 'Destroyer',
                size: 1.57,
                folder: 'wmt_43',
                health: C.base_health.robot_giant
            },
            {
                name: 'Butcher',
                size: 1.08,
                folder: 'wmt_40',
                health: C.base_health.human+C.armor.legend
            }
        ]
    },
    {
        name: 'Level 4',
        list: [
            {
                name: 'Elite Guard',
                size: 1.2,
                folder: 'wmt_36',
                health: C.base_health.human+C.armor.legend+C.shield.heavy
            },
            {
                name: 'Elite Shield',
                size: 1.2,
                folder: 'wmt_37',
                health: C.base_health.human+C.armor.legend+C.shield.heavy
            },
            {
                name: 'Commando',
                size: 1.07,
                folder: 'wmt_42',
                health: C.base_health.human+C.armor.heavy
            }
        ]
    },
    {
        name: 'Level 5',
        list: [
            {
                name: 'King',
                size: 1.75,
                folder: 'wmt_44',
                health: C.base_health.robot_giant+C.armor.legend
            }
        ]
    }
]