const fs = require("fs").promises;
const path = require("path");
const startProcess = require("./processGame");
const dataFile = "febData.json";
const progressFile = "progress.json";

async function loadGames(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) throw new Error("Invalid JSON format");
  return parsed;
}

async function getLastProcessedIndex() {
  try {
    const raw = await fs.readFile(progressFile, "utf8");
    const { lastProcessedIndex } = JSON.parse(raw);
    return typeof lastProcessedIndex === "number" ? lastProcessedIndex : -1;
  } catch {
    return -1;
  }
}

async function saveProgress(index) {
  await fs.writeFile(
    progressFile,
    JSON.stringify({ lastProcessedIndex: index }, null, 2)
  );
}

async function main() {
  try {
    const absoluteDataPath = path.resolve(__dirname, dataFile);
    const games = await loadGames(absoluteDataPath);
    const lastIndex = await getLastProcessedIndex();
    const startIndex = lastIndex + 1;

    console.log(`Starting from index: ${startIndex}`);

    for (let i = startIndex; i < games.length; i++) {
      const game = games[i];
      console.log(
        `Processing [${i + 1}/${games.length}]: ${game.name} (ID: ${game.id})`
      );

      try {
        await startProcess(game);
        await saveProgress(i);
      } catch (err) {
        console.error(`❌ Error processing game at index ${i}:`, err.message);
        console.log("💥 Exiting to preserve progress...");
        process.exit(1);
      }
    }

    console.log("✅ All games processed.");
    await fs.unlink(progressFile); // Clean up progress file if all done
  } catch (err) {
    console.error("❌ Fatal error:", err.message);
    process.exit(1);
  }
}

main();
