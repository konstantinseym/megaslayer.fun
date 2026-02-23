import "../../styles/ErrorMsg.css";
import { AnimatePresence, motion } from "motion/react";

function ErrorMsg({ isShown, errMsg }) {
  return (
    <AnimatePresence>
      {isShown && (
        <motion.p
          animate={{ opacity: 1, x: [0, -5, 5, -5, 5, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="errormsg"
        >
          {errMsg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default ErrorMsg;
