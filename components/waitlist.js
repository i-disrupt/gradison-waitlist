import { useEffect, useRef, useState } from "react";

import style from "../styles/waitlist.module.scss";
import axios from "axios";
import { Arrow, Check, Loading } from "/components/icons.js";

export default function Waitlist() {
  const recaptchaRef = useRef();
  const emailRef = useRef();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const [membersLoading, setMembersLoading] = useState(false);
  const [memberCount, setMemberCount] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    stop();

    if (!event.target.email.value) {
      emailRef.current.focus();
    } else {
      setLoading(true);
      setResult({});

      axios
        .post("/api/join", { email: event.target.email.value })
        .then((response) => {
          setResult(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setResult({
            success: false,
            message: "Something went wrong.",
          });
          setLoading(false);
        });
    }
  };

  return (
    <div
      className={style.waitlist}
      data-aos="fade-up"
      data-aos-delay={1400}
      data-aos-anchor="body"
    >
      <div className="flex flex-col text-base text-white">
        <div className="font-medium">Join the waitlist  <span className="text-white text-opacity-50">• 7,461 <span className="text-white text-opacity-30">members are currently waiting!</span></span></div>
        <div className="text-white text-opacity-30 mt-2">
          Our waitlist has now been closed as we&apos;re making our final preparations before release.

        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className={style.waitlist__form}>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Waitlist has been disabled."
            disabled={true}
          />
          <button
            type="submit"
            disabled={true}
            className={[
              loading || result?.success
                ? "hover:bg-transparent cursor-default"
                : "",
              result?.success ? "pointer-events-none" : "",
            ].join(" ")}
          >
            {!loading &&
              ((!result?.success && <Arrow className="w-4 h-4 text-white" />) ||
                (result?.success && <Check className="w-4 h-4 text-white" />))}
            {loading && <Loading className="w-4 h-4 text-white animate-spin" />}
          </button>
        </label>
        {!loading && result?.message && !result?.success && (
          <div className="mt-2.5 ml-3 text-xs text-red-500">
            {result.message}
          </div>
        )}
      </form>
    </div>
  );
}
