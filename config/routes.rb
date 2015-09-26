ThIndex::Application.routes.draw do


  root "pages#home"
  match ':controller(/:action(/:id))', :via => [:get, :post]
  get "home", to: "pages#home", as: "home"
  get "inside", to: "pages#inside", as: "inside"
  
  
  devise_for :users

  namespace :admin do
    root "base#index"
    resources :users
    
  end

end
