import { sql } from "@vercel/postgres";
import RemoveButton from "./components/remove-button";
import FormEditor from "./components/form-editor";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM Person`;
  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col gap-4 w-[400px]">
        {/* Form Container */}
        <FormEditor />
        {/* List Container */}
        <div className="w-full max-w-md rounded-md shadow-md flex flex-col gap-4">
          {rows &&
            rows.map((row, i) => (
              <div
                key={i}
                className="text-white space-y-4 p-4 bg-gray-700 flex justify-between"
              >
                {/* Replace with dynamic content */}
                {row.name}
                {<RemoveButton name={row.name} />}
              </div>
            ))}

          {/* Repeat for each person */}
        </div>
      </div>
    </div>
  );
}
