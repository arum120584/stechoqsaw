<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Inertia\Inertia;

use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function getUsers()
    {
        $users = User::all();
        return Inertia::render('Users/Users', [
            'users' => $users
        ]);
    }

    public function formAddUser()
    {
        return Inertia::render('Users/AddUser');
    }

    public function formDetailUser($id)
    {
        $user = User::find($id);
        return Inertia::render('Users/DetailUser', [
            'user' => $user
        ]);
    }

    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;

        $user->save();

        return redirect()->route('user.all');
    }

    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();

        // return redirect()->route('user.all');
    }

    public function addUser(Request $request)
    {
        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role = $request->role;
        $user->created_at = now();

        $user->save();

        return redirect()->route('user.all');
    }
}
