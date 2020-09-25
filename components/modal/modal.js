/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showCreateNewModal: false,
      typeModal: null,
      dataCanvas: [
        { name: 'Ukuran Canvas', value: '', selected: true, disabled: true },
        { name: 'Instagram', value: '1080x1080', size: '1080 x 1080 px', selected: false, disabled: false },
        { name: 'Logo', value: '500x500', size: '500 x 500 px', selected: false, disabled: false },
        { name: 'Resume', value: '595x842', size: '595 x 842 px', selected: false, disabled: false },
        { name: 'Poster', value: '1191x1684', size: '1191 x 1684 px', selected: false, disabled: false },
        { name: 'Kartu nama', value: '241x142', size: '241 x 142 px', selected: false, disabled: false },
        { name: 'Kustom', value: 'custom', selected: false, disabled: false }
      ],
      namaProject: '',
      panjangCanvasCustom: '',
      lebarCanvasCustom: '',
      ukuranCanvas: '',
      btn_create_project_active: true
    }
  },
  props: ['type'],
  mounted () {
    this.typeModal = this.type
  },
  created () {
    this.$nuxt.$on('deleteProject', () => {
      this.btn_create_project_active = !this.btn_create_project_active
      this.$store.dispatch('removeProject')
    })
  },
  computed: {
    ...mapState({
      projectState: state => state.project
    })
  },
  methods: {
    createNewScreen () {
      this.showCreateNewModal = !this.showCreateNewModal
      this.$emit('btn_modals', 'data2')
    },
    hallo () {
      this.$emit('btn_modals', 'data hallo')
    },
    toggleModal () {
      this.showCreateNewModal = !this.showCreateNewModal
      this.btn_create_project_active = !this.btn_create_project_active
      this.namaProject = ''

      this.$store.dispatch('removeProject')
    },
    selectedCanvas (e) {
      if (e.target.value === 'custom') {
        $('.input_custom_canvas').css('display', 'block')
        this.btn_create_project_active = false
      } else {
        $('.input_custom_canvas').css('display', 'none')
        this.ukuranCanvas = e.target.value
        this.panjangCanvasCustom = ''
        this.lebarCanvasCustom = ''
        this.btn_create_project_active = false
      }
    },
    createProject () {
      if (this.panjangCanvasCustom !== '' && this.lebarCanvasCustom !== '') {
        this.ukuranCanvas = `${this.panjangCanvasCustom}x${this.lebarCanvasCustom}`
      }

      const data = {
        nama_project: this.namaProject,
        ukuran_canvas: this.ukuranCanvas
      }

      this.$nuxt.$emit('createProject', data)

      this.$store.dispatch('project', data)

      this.showCreateNewModal = !this.showCreateNewModal
      // console.log(this.projectState.nama_project)
    }
  }
}
