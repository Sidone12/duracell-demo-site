<template>
    <div>
        <div class="flex bg-[#3c3c3c] p-4 rounded my-5" v-if="isFormSignIn">
            <p class="text-xs text-brand-grey-4">Thanks for submitting the booking form, I will answer as soon as
                possible. Thank you for your patience!</p>
        </div>
        <div class="w-full" v-if="!isFormSignIn">
            <h1 class="text-white text-3xl md:text-4xl lg:text-6xl mb-2 font-semibold">Complete the form to win tickets
                to the race</h1>
            <form @submit.prevent="submitForm">
                <div class="grid md:grid-cols-2">
                    <div class="flex flex-col px-2 pt-5">
                        <label for="firstName" class="pb-1">First name</label>
                        <input type="text" name="firstName" v-model="formData.firstName">
                        <span v-if="showValidation && !formData.firstName" class="text-red-500">Please enter your first
                            name</span>

                    </div>
                    <div class="flex flex-col px-2 pt-5">
                    <label for="lastName" class="pb-1">Last name</label>
                    <input type="text" name="lastName" v-model="formData.lastName">
                    <span v-if="showValidation && !formData.lastName" class="text-red-500">Please enter your last
                            name</span>
                </div>
                <div class="flex flex-col px-2 pt-5">
                    <label for="phone" class="pb-1">Phone number</label>
                    <input type="tel" name="phone" v-model="formData.phone">
                    <span v-if="showValidation && !formData.phone" class="text-red-500">Please enter your phone
                            number</span>
                </div>
                <div class="flex flex-col px-2 pt-5">
                    <label for="email" class="pb-1">E-mail address</label>
                    <input type="email" name="email" v-model="formData.email">
                    <span v-if="showValidation && !formData.email" class="text-red-500">Please enter your email
                            address</span>
                </div>
                </div>
                <div class="flex w-full justify-center pt-5">
                <div class="w-full">
                    <Divider />
                    <div class="bg-[#1e1e1e] p-6 text-center">
                        <label for="bodyPicture" class="flex justify-center items-center hover:scale-125 hover:text-[#c98959] transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
                                    class="mr-2">
                                    <path fill="currentColor"
                                        d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z">
                                    </path>
                                </svg>
                                <span class="text-base">Drag and drop or upload a picture</span>
                            </label>
                        <input type="file" id="bodyPicture" ref="bodyPicture" name="bodyPicture" style="display: none;" accept="image/*" @change="onChange">
                    </div>
                    <Divider />
                    <span v-if="showValidation && !formData.image" class="text-red-500">Please add your image</span>
                    <div class="flex">
                        <img v-if="formData.image" :src="formData.image" alt="Uploaded Image" class="mt-4 w-1/2 h-auto">
                        <span v-if="formData.image" @click="deleteTattooImg" class="text-white font-semibold text-xl hover:text-[#c4c4c4] m-3 cursor-pointer">
                                x
                            </span>
                    </div>

                </div>
            </div>
                <div class="flex flex-col w-full justify-center pt-5">
                <span class="text-base mb-2">
                        In the most creative and original way, answer the following question in writing or in the form
                        of a
                        photo: 'What drives you? Maybe it's a passion for car racing or another sport, cooking, or maybe
                        social involvement?
                    </span>
                <textarea v-model="formData.answer" cols="30" rows="3" placeholder="..."></textarea>
                <span v-if="showValidation && !formData.answer" class="text-red-500">Please add text</span>
            </div>
                <div class="mt-10 flex justify-center">
                    <button type="submit" :disabled="isBusy"
                        class="bg-[#c98959] border-2 rounded-full border-solid border-[#c98959] px-8 py-3 hover:bg-black transition-all duration-500">
                        <span v-if="!isBusy">Register</span> <span v-if="isBusy">Registering...</span></button>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup lang="ts">
interface FormData {
    firstName: string
    lastName: string
    phone: string
    email: string
    answer: string
    image?: string
}

const formData = ref<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    answer: '',
});

const isBusy = ref<boolean>(false)
const isFormSignIn = ref<boolean>(false)
const bodyPicture = ref<string[]>([])

const showValidation = ref<boolean>(false);


function deleteTattooImg(): void {
    const { image, ...formDataWithoutImage } = formData.value;
    formData.value = formDataWithoutImage;
}

async function onChange(event: Event): Promise<void> {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;

    let images: Promise<{ url: string }>[] = [];
    for (const element of files) {
        images.push(readAndResizeImg(element));
    }

    let tattooImgArray = await Promise.all(images);
    await Promise.all(tattooImgArray);
    formData.value = { ...formData.value };
    formData.value = { ...formData.value, image: tattooImgArray[0].url };
}


async function submitForm(): Promise<void> {
    if (isBusy.value) {
        return
    }
    isBusy.value = true;

    showValidation.value = true;
    const emptyFields = Object.keys(formData.value).filter(key => !formData.value[key]);
    if (emptyFields.length > 0) {
        console.log('Please fill in all fields.');
        isBusy.value = false
        return;
    }
    const res = await $fetch('/api/submit', {
        method: 'post',
        body: formData.value
    }).then(response => {
        if (response.status === 200) {
            console.log(response.body)
            isBusy.value = false;
            isFormSignIn.value = true
            formData.value = {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                answer: ''
            };
            console.log('Form submitted:', formData.value);
        } else {
            console.log('error')
        }
    }).catch(error => {
        console.error('Error submitting form:', error);
    }).finally(() => {
        isBusy.value = false;
    });

}
</script>

<style scoped>
input,
textarea {
    padding: 10px;
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    appearance: none;
    background-color: #1e1e1e;
    background-clip: padding-box;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    border-radius: 5px;
    border: 1px solid white;
}

.gradient {
    background: linear-gradient(90deg, rgb(191, 139, 97) 0%, rgb(232, 167, 93) 25%, rgb(242, 185, 112) 35%, rgb(251, 229, 192) 50%, rgb(242, 185, 112) 65%, rgb(232, 167, 93) 75%, rgb(191, 139, 97) 100%);
}
</style>