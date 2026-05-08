enum PunishmentAction {
    Warn,
    Mute,
    Ban,
}

interface PunishmentRule {
    action: PunishmentAction;
    durationMinutes?: number;
    durationMonths?: number;
}
export const PunishmentLevels: Record<number, PunishmentRule> = {
    11: { action: PunishmentAction.Warn },
    10: { action: PunishmentAction.Mute, durationMinutes: 5 },
    9:  { action: PunishmentAction.Warn },
    8:  { action: PunishmentAction.Mute, durationMinutes: 60 },
    7:  { action: PunishmentAction.Mute, durationMinutes: 60 },
    6:  { action: PunishmentAction.Mute, durationMinutes: 1440 },
    5:  { action: PunishmentAction.Mute, durationMinutes: 1440 },
    4:  { action: PunishmentAction.Mute, durationMinutes: 10080 },
    3:  { action: PunishmentAction.Mute, durationMinutes: 10080 },
    2:  { action: PunishmentAction.Ban, durationMonths: 1 },
    1:  { action: PunishmentAction.Ban, durationMonths: 1 },
    0:  { action: PunishmentAction.Ban, durationMonths: 6 }
};