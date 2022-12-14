@extends('layout')
  
@section('content')

<main class="login-form">
  <div class="cotainer">
    
      <div class="row justify-content-center">
          <div class="col-md-8">
              <div class="card">
                
            
                  <div class="card-header"> Login <br>
                     <nav class="navbar navbar-expand-lg navbar-light navbar-laravel" style = "position:absolute !important;" >
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                   
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                @guest
                                    <li class="nav-item" style = "background-color:">
                                        <a class="nav-link" href="{{ route('login') }}">Login</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('register') }}">Register</a>
                                    </li>
                                @else
                                    <li class="nav-item">
                                        <a class="nav-link" href="{{ route('logout') }}">Logout</a>
                                    </li>
                                @endguest
                            </ul>
                  
                        </div>
                    </div>
                </nav>
            </div>
                  <div class="card-body">
  
                      <form action="{{ route('login.post') }}" method="POST">
                          @csrf
                          <div class="form-group row">
                              <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                              <div class="col-md-6">
                                  <input type="text" id="email_address" class="form-control" name="email" required autofocus>
                                  @if ($errors->has('email'))
                                      <span class="text-danger">{{ $errors->first('email') }}</span>
                                  @endif
                              </div>
                          </div>
  
                          <div class="form-group row">
                              <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                              <div class="col-md-6">
                                  <input type="password" id="password" class="form-control" name="password" required>
                                  @if ($errors->has('password'))
                                      <span class="text-danger">{{ $errors->first('password') }}</span>
                                  @endif
                              </div>
                          </div>

                          {{-- <div class="form-group row">

                            <div class="col-md-2  offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input id="user" type="checkbox" name="remember"> Admin
                                    </label>
                                    @if ($errors->has('user'))
                                      <span class="text-danger">{{ $errors->first('user') }}</span>
                                  @endif
                                </div>
                                
                            </div>
                            <div class="col-md-2">
                                <div class="checkbox">
                                    <label>
                                        <input  id="user" type="checkbox" name="remember"> Talent
                                    </label>
                                    @if ($errors->has('user'))
                                    <span class="text-danger">{{ $errors->first('user') }}</span>
                                @endif
                                </div>
                                
                            </div>
                            <div class="col-md-2">
                                <div class="checkbox">
                                    <label>
                                        <input  id="user" type="checkbox" name="remember"> Client
                                    </label>
                                       @if ($errors->has('user'))
                                      <span class="text-danger">{{ $errors->first('user') }}</span>
                                  @endif
                                </div>
                                
                            </div>
                        </div> --}}
  
                          <div class="form-group row">
                              <div class="col-md-6 offset-md-4">
                                  <div class="checkbox">
                                      <label>
                                          <input type="checkbox" name="remember"> Remember Me
                                      </label>
                                  </div>
                              </div>
                          </div>
  
                          <div class="col-md-6 offset-md-4">
                              <button type="submit" class="btn btn-primary">
                                  Login
                              </button>
                          </div>
                      </form>
                        
                  </div>
              </div>
          </div>
      </div>
  </div>
</main>
@endsection