<template>
  <div>
    <button v-if="typeModal === 'NewScreen'" class="bg-blue-400 text-white bold p-2 shadow-lg rounded-md" @click="createNewScreen">
      Buat desain
    </button>

    <button v-if="typeModal === 'hallo'" class="bg-blue-400 text-white bold p-2 shadow-lg rounded-md" @click="hallo">
      Hallo
    </button>

    <!-- modal create screen -->
    <div v-if="showCreateNewModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto">
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div class="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-md font-semibold">
              Buat desain
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" @click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>

          <div class="relative p-6 flex-auto">
            <div class="w-full max-w-xs">
              <form class="">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-0" for="username">
                    Nama project
                  </label>
                  <input id="username" v-model="namaProject" class="border border-gray-500 rounded w-full p-2 text-gray-700 leading-tight " type="text" placeholder="ex: project1">
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-0" for="canvas">
                    Ukuran canvas
                  </label>
                  <select id="ukuran_canvas" name="ukuran_canvas" class="border border-gray-500 rounded w-full p-2 text-gray-700 leading-tight" @change="selectedCanvas($event)">
                    <option
                      v-for="(item, index) in dataCanvas"
                      :id="'item-'+index"
                      :key="index"
                      :selected="item.selected"
                      :disabled="item.disabled"
                      :value="item.value"
                    >
                      {{ item.name }}
                      {{ item.hasOwnProperty('size') ? `(${item.size})` : null }}
                    </option>
                  </select>
                </div>
                <div class="mb-4 input_custom_canvas" style="display: none;">
                  <label class="block text-gray-700 text-sm font-bold mb-0" for="username">
                    panjang
                  </label>
                  <input id="username" v-model="panjangCanvasCustom" class="border border-gray-500 rounded w-full p-2 text-gray-700 leading-tight " type="number" placeholder="ex: 100">
                </div>
                <div class="mb-4 input_custom_canvas" style="display: none;">
                  <label class="block text-gray-700 text-sm font-bold mb-0" for="username">
                    lebar
                  </label>
                  <input id="username" v-model="lebarCanvasCustom" class="border border-gray-500 rounded w-full p-2 text-gray-700 leading-tight " type="number" placeholder="ex: 200">
                </div>
                <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :class="{ 'disabled_btn': btn_create_project_active}" type="button" @click="createProject()">
                  Buat
                </button>
              </form>
            </div>
          </div>

          <!-- <div class="flex items-center justify-end p-5 border-t border-solid border-gray-300 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-1 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" @click="toggleModal()">
              Close
            </button>
          </div> -->
        </div>
      </div>
    </div>
    <div v-if="showCreateNewModal" class="opacity-25 fixed inset-0 z-40 bg-black" />
  </div>
</template>

<script src="./modal.js"></script>

<style lang="scss">
  .disabled_btn {
    pointer-events: none;
    opacity: .5;
  }
</style>
