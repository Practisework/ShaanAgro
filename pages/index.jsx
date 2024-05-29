import { motion, spring } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="py-10"
      >
        <h1 className="text-center text-6xl">शान ॲग्रो</h1>
        <h2 className="text-center text-4xl">समजूतदार शेतकऱ्याची पहिली आवड </h2>
      </motion.div>
    </>
  );
}
