function removeStat(props, prevRace) {
    switch (prevRace) {
        case "Elf": {
            props.setStats(prev => ({ ...prev, "dexterity": Number(props.stats.dexterity) - 2 }));
            break;
        }
        case "Dragonborn": {
            props.setStats(prev => ({
                ...prev,
                "strength": (Number(props.stats.strength) - 2),
                "charisma": (Number(props.stats.charisma) - 1)
            }));
            break;
        }
        case "Dwarf": {
            props.setStats(prev => ({ ...prev, "constitution": Number(props.stats.constitution) - 2 }))
            break;
        }
        case "Gnome": {
            props.setStats(prev => ({ ...prev, "intelligence": Number(props.stats.intelligence) - 2 }))
            break;
        }
        case "Half-Elf": {
            props.setStats(prev => ({ ...prev, "charisma": Number(props.stats.charisma) - 2 }))
            break;
        }
        case "Halfling": {
            props.setStats(prev => ({ ...prev, "dexterity": Number(props.stats.dexterity) - 2 }))
            break;
        }
        case "Half-Orc": {
            props.setStats(prev => ({
                ...prev,
                "strength": Number(props.stats.strength) - 2,
                "constitution": Number(props.stats.constitution) - 1
            }))
            break;
        }
        case "Tiefling": {
            props.setStats(prev => ({
                ...prev,
                "charisma": Number(props.stats.charisma) - 2,
                "intelligence": Number(props.stats.intelligence) - 1
            }))
            break;
        }
        default: {
            return;
        }
    }
}

function addStat(props, value) {
    switch (value) {
        case "Elf": {
            props.setStats(prev => ({ ...prev, "dexterity": (Number(props.stats.dexterity) + 2) }));
            break;
        }
        case "Dragonborn": {
            props.setStats(prev => ({
                ...prev,
                "strength": (Number(props.stats.strength) + 2),
                "charisma": ((Number(props.stats.charisma) + 1))
            }))
            break;
        }
        case "Dwarf": {
            props.setStats(prev => ({ ...prev, "constitution": Number(props.stats.constitution) + 2 }))
            break;
        }
        case "Gnome": {
            props.setStats(prev => ({ ...prev, "intelligence": Number(props.stats.intelligence) + 2 }))
            break;
        }
        case "Half-Elf": {
            props.setStats(prev => ({ ...prev, "charisma": Number(props.stats.charisma) + 2 }))
            break;
        }
        case "Halfling": {
            props.setStats(prev => ({ ...prev, "dexterity": Number(props.stats.dexterity) + 2 }))
            break;
        }
        case "Half-Orc": {
            props.setStats(prev => ({
                ...prev,
                "strength": Number(props.stats.strength) + 2,
                "constitution": Number(props.stats.constitution) + 1
            }))
            break;
        }
        case "Tiefling": {
            props.setStats(prev => ({
                ...prev,
                "charisma": Number(props.stats.charisma) + 2,
                "intelligence": Number(props.stats.intelligence) + 1
            }))
            break;
        }
        default: {
            return;
        }
    }
}

export { removeStat, addStat };