import { ApplicationCommandOptionType, type CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption, SlashChoice } from "discordx";
import fetch from "node-fetch";


type ModerationLevel = "light" | "medium" | "strict";
const API_BASE_URL = process.env.API_BASE_URL;

@Discord()
export class SetModerationConfig {
    @Slash({ name: "setmoderation", description: "Configurar la moderación automática" })
    async setModeration(
        @SlashChoice({ name: "Light", value: "light" })
        @SlashChoice({ name: "Medium", value: "medium" })
        @SlashChoice({ name: "Strict", value: "strict" })
        @SlashOption({
            name: "moderation-level",
            description: "Nivel de moderación",
            type: ApplicationCommandOptionType.String,
            required: true
        })
        level: ModerationLevel,
        interaction: CommandInteraction
    ) {
        const response = await fetch(`${API_BASE_URL}/${interaction.guildId}/moderation`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bot ${process.env.BOT_TOKEN}`
        },
        body: JSON.stringify({ level })
        });

        if (response.ok) {
        await interaction.reply({ content: `Nivel actualizado a **${level}**`, ephemeral: true });
        } else {
        await interaction.reply({ content: "No se pudo actualizar el nivel.", ephemeral: true });
        }
    }
}