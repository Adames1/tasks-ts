import type { PriorityLabel } from "../types"

type PriorityInfo = {
    label: string,
    color: string,
    bg: string
}

export const PRIORITY: Record<PriorityLabel, PriorityInfo> = {
    alta: { label: "Alta", color: "#B8433A", bg: "#F8E9E7" },
    media: { label: "Media", color: "#B8862B", bg: "#F8F0E1" },
    baja: { label: "Baja", color: "#3E6E90", bg: "#E9EFF4" },
};