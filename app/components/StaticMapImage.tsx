export default function StaticMapImage() {
    return (
        <div className="w-full h-full rounded-md overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5766843939823!2d126.97610955971121!3d37.56667163337004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ed7f0dd72d%3A0x69137488be92e7f!2s110%20Sejong-daero%2C%20Jung-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1688973524205!5m2!1sen!2skr"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
