<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\StudentsModel;
use CodeIgniter\RESTful\ResourceController;

class Students extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    use ResponseTrait;
    public function index()
    {
        $model = new StudentsModel();
        $data = $model->findAll();
        return $this->respond($data);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        $model = new StudentsModel();
        $data = $model->find(['id'  => $id]);
        if (!$data) {
            return $this->failNotFound('No Data Found in list');
        };
        return $this->respond($data[0]);
    }
    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        helper(['form']);
        $rules = [
            'nome' => 'required',
            'email' => 'required',
            'telefone' => 'required',
            'endereco' => 'required',
            'foto' => 'required',
        ];
        $data = [
            'nome' => $this->request->getVar('nome'),
            'email' => $this->request->getVar('email'),
            'telefone' => $this->request->getVar('telefone'),
            'endereco' => $this->request->getVar('endereco'),
            'foto' => $this->request->getVar('foto'),
        ];

        if (!$this->validate($rules)) {
            return $this->fail($this->validator->getErrors());
        };
        $model = new StudentsModel();
        $model->save($data);
        $response = [
            'status' => 201,
            'error' => null,
            'messages' => [
                'success' => 'Data Inserted'
            ]
        ];
        return $this->respondCreated($response);
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        helper(['form']);
        $rules = [
            'nome' => 'required',
            'email' => 'required',
            'telefone' => 'required',
            'endereco' => 'required',
            'foto' => 'required',
        ];
        $data = [
            'nome' => $this->request->getVar('nome'),
            'email' => $this->request->getVar('email'),
            'telefone' => $this->request->getVar('telefone'),
            'endereco' => $this->request->getVar('endereco'),
            'foto' => $this->request->getVar('foto'),
        ];

        if (!$this->validate($rules)) {
            return $this->fail($this->validator->getErrors());
        };
        $model = new StudentsModel();
        $find = $model->find(['id' => $id]);
        if (!$find) {
            return $this->failNotFound('No Data Found get id in update');
        };
        $model->update($id, $data);

        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'Data updated'
            ]
        ];
        return $this->respond($response);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        $model = new StudentsModel();
        $find = $model->find(['id' => $id]);
        if (!$find) {
            return $this->failNotFound('No Data Found for delete');
        };
        $model->delete($id);

        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'Data deleted'
            ]
        ];
        return $this->respond($response);
    }
}
