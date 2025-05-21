import { Slot } from "expo-router";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
import { inicialDatabase } from "./src/database/inicialDatabase";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="myDatabase.db" onInit={inicialDatabase}>
      <Slot />
    </SQLiteProvider>
  );
}
