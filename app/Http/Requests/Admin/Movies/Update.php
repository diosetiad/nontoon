<?php

namespace App\Http\Requests\Admin\Movies;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'nullable|unique:movies,name,' . $this->movie->id,
            'genre' => 'nullable|string|regex:/^[a-zA-Z\s]+$/',
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image|max:1000',
            'rating' => 'nullable|numeric|min:0|max:10',
            'is_featured' => 'nullable|boolean'
        ];
    }

    public function messages()
    {
        return [
            'thumbnail.uploaded' => 'The thumbnail failed to upload. Max size: 1 MB.'
        ];
    }
}
