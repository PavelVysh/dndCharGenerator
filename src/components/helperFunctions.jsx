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
        default: {
            return;
        }
    }
}

export { removeStat, addStat };