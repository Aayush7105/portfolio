const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer">
      <div className="flex w-full items-center justify-center space-y-4 px-2 py-6 md:px-5 font-mono border-b border-dashed border-neutral-500/40 dark:border-neutral-500/50">
        <div className="flex flex-col">
          <p className="text-[12px] text-neutral-400">
            Design & Developed by Aayush Rawat ©{" "}
            <span className="tracking-tighter">{currentYear}</span> All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
