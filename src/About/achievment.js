import Box from "../component/box.js";

export function Achievement() {
    return (
        <>
            <div class="about">
                <div class="container">
                    <div class="acheivement">
                        <div class="text-box">
                            <h1>Acheivements</h1>
                            <p>Your first digital destination for learning information technology
                                The Information Technology Institute, under the supervision of the Egyptian Ministry of Communications and Information Technology, launched specialized educational content presented by a group of experts in various fields with the aim of helping Egyptian and Arab youth start their path or develop their skills in the fields of information technology.
                            </p>
                            <div class="image">
                                <img src="image/about achievements.svg" alt="acheivement" />
                            </div>
                            <div class="box-container">
                                <Box icon="i" text="450+" paragraph="Courses"></Box>
                                <Box icon="i" text="26" paragraph=" Students."></Box>
                                <Box icon="i" text="79,000+" paragraph="Awards"></Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}