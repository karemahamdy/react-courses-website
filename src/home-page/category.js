import Box from "../component/box.js";
import Textbox from "../component/text.js";

export function Category() {
    return (
        <>
            <div class="categories">
                <div class="container">
                    <div class="grid">
                    <div class="text">
                        <Textbox name="Categories" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ducimus sapiente, cumque earum
                    doloribus velit vero voluptas illum id? Obcaecati magnam ipsam temporibus totam odit corrupti
                    delectus porro fuga aut" btn="Learn More" >
                        </Textbox>
                    </div>
                    <div class="category-box">
                        <Box icon="i" text="Blockchain" paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sit."></Box>
                        <Box icon="i" text="Blockchain" paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sit."></Box>
                        <Box icon="i" text="Blockchain" paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sit."></Box>
                        <Box icon="i" text="Blockchain" paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sit."></Box>
                        <Box icon="i" text="Blockchain" paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sit."></Box>
                        <Box icon="i" text="Blockchain" paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sit."></Box>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}