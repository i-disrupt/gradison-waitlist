import emailValidator from "email-validator";
import { WebhookClient, EmbedBuilder, Colors } from "discord.js";
import { Database as sqlite3 } from "sqlite3";

import moment from "moment";
import axios from "axios";

export default async function handler(req, res) {
  if (!req.body.email)
    res.status(200).json({ success: false, message: "Email field is empty." });

  if (emailValidator.validate(req.body.email)) {
    const db = new sqlite3("./waitlist.db", (err) => {
      if (err) {
        console.error("Error opening database:", err.message);
      } else {
        // Create the emails table if it doesn't exist
        db.run(
          `CREATE TABLE IF NOT EXISTS emails (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              email TEXT UNIQUE NOT NULL
          )`,
          [],
          (err) => {
            if (err) {
              console.error("Error creating table:", err.message);
            }
          }
        );
      }
    });

    let error = "Something went wrong.";
    // Send discord webhook here
    try {
      const webhookClient = new WebhookClient({
        id: "1154934953805623376",
        token:
          "HdV87n1LFQKPIWYY-ganfFCaj7Hyf6k0hCHE5M540RHvExJFBBFRHAcNcpQ6b8f-0az3",
      });

      const embed = new EmbedBuilder()
        .setTitle("Waitlist | Someone joined!")
        .setDescription(
          `[${moment().format("YYYY-MM-DD")}] - New user entered waitlist!`
        )
        .addFields(
          { name: "Email", value: req.body.email, inline: true },
          { name: "Valid email?", value: "Yes", inline: true },
          { name: "Country", value: `${req.body.country}` }
        )
        .setColor(Colors.Green)
        .setTimestamp();

      const query = "INSERT INTO emails (email) VALUES (?)";
      db.run(query, [req.body.email], function (err) {
        if (err) {
          if (err.code === "SQLITE_CONSTRAINT") {
            error = "Email already exists!";
            return res.status(200).json({ success: false, message: error });
          }
        }
      });

      await webhookClient.send({
        embeds: [embed],
      });
      res
        .status(200)
        .json({ success: true, message: "You've joined the waitlist!" });
    } catch (error) {
      console.error(error);
      res.status(200).json({ success: false, message: error });
    }
  }
}
