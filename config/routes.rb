Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users do
      resources :posts do
        put 'add_like', to: 'posts#add_like'
        resources :commments
      end
      put 'add_friend', to: 'users#add_friend'
    end
    resources :posts
  end
end


