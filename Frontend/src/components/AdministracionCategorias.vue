<template>
    <v-data-table
    :headers="headers"
    :items="categorias"
    sort-by="id"
    class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar
            flat
            >
                <v-toolbar-title>Categorias</v-toolbar-title>

                <v-divider
                class="mx-4 mn-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>

                <v-dialog
                v-model="dialog"
                max-width="500px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >
                            Nueva Categoria
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    >
                                        <v-text-field
                                        v-model="editedItem.nombre"
                                        label="Nombre"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                    cols="12"
                                    >
                                        <v-textarea
                                        v-model="editedItem.descripcion"
                                        label="Descripción"
                                        auto-grow
                                        ></v-textarea>
                                    </v-col>
                                    <v-col
                                    cols="12"
                                    >
                                        <v-text-field
                                        v-model="editedItem.imagen"
                                        label="Link Imagen"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                            color="primary"
                            text
                            @click="close"
                            >
                                Cancelar
                            </v-btn>
                            <v-btn
                            color="primary"
                            text
                            @click="save"
                            >
                                Guardar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="headline">Seguro que querés cambiar el estado?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="closeDelete">No</v-btn>
                            <v-btn color="primary" text @click="deleteItemConfirm">Si</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
            medium
            class="mr-2"
            @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
            medium
            @click="deleteItem(item)"
            >
                <template v-if="item.estado === 1">
                    mdi-toggle-switch
                </template>
                <template v-else>
                    mdi-toggle-switch-off-outline
                </template>
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn
            color="primary"
            @click="initialize"
            >
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import axios from 'axios';
    export default {
        data: () => ({
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: 'Categoria',
                    align: 'start',
                    sortable: true,
                    value: 'nombre',
                },
                { text: 'ID', value: 'id' },
                { text: 'Descripción', value: 'descripcion' },
                { text: 'Estado', value: 'estado' },
                { text: 'Editar', value: 'actions', sortable: false },
            ],
            categorias: [],
            editedIndex: -1,
            editedItem: {
                nombre: '',
                descripcion: '',
                estado: 1,
                id: 0,
                imagen: ''
            },
            defaultItem: {
                nombre: '',
                descripcion: '',
                estado: 1,
                id: 0,
                imagen: ''
            },
        }),
        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'Nueva Categoria' : 'Editar Categoria'
            },
        },
        watch: {
            dialog (val) {
                val || this.close()
            },
            dialogDelete (val) {
                val || this.closeDelete()
            },
        },
        created () {
            this.list()
        },
        methods: {
            list () {
                axios.get('http://localhost:3000/api/categoria/list')
                .then(response => {
                    this.categorias = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
            },
            editItem (item) {
                this.editedIndex = item.id
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            deleteItem (item) {
                this.editedIndex = this.categorias.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
            },
            deleteItemConfirm () {
                if (this.editedItem.estado === 1) {
                    axios.put('http://localhost:3000/api/categoria/deactivate', {
                        "id": this.editedItem.id,
                    })
                    .then(response => {
                        this.list();
                    })
                    .catch(error => {
                        return error;
                    })
                } else {
                    axios.put('http://localhost:3000/api/categoria/activate', {
                        "id": this.editedItem.id,
                    })
                    .then(response => {
                        this.list();
                    })
                    .catch(error => {
                        return error;
                    })
                }
                this.closeDelete()
            },
            close () {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },
            closeDelete () {
                this.dialogDelete = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },
            save () {
                if (this.editedIndex > -1) {
                    axios.put('http://localhost:3000/api/categoria/update', {
                        "id": this.editedItem.id,
                        "nombre": this.editedItem.nombre,
                        "descripcion": this.editedItem.descripcion,
                        "imagen": this.editItem.imagen,
                    })
                    .then(response => {
                        this.list();
                    })
                    .catch(error => {
                        return error;
                    })
                } else {
                    axios.post('http://localhost:3000/api/categoria/add', {
                        "id": this.editedItem.id,
                        "nombre": this.editedItem.nombre,
                        "descripcion": this.editedItem.descripcion,
                        "imagen": this.editItem.imagen,
                    })
                    .then(response => {
                        this.list();
                    })
                    .catch(error => {
                        return error;
                    })
                }
                this.close()
            },
        },
    }
</script>