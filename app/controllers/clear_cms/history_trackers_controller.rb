module ClearCMS
  class HistoryTrackersController < ClearCMS::ApplicationController
    before_filter :authenticate_user!
    skip_before_filter :verify_authenticity_token, :only=>[:email]
    authorize_resource :class=>'ClearCMS::HistoryTracker'

    def index
      @user = current_user
      @content=Content.find(params[:content_id])
      @trackers = @content.history_tracks.sort_by(&:created_at).reverse!
    end

    def update
      @user = current_user
      @tracker = ClearCMS::HistoryTracker.find(params[:id])
      @content = ClearCMS::Content.find(@tracker.association_chain.first[:id])
      if @tracker.undo_or_redo(params[:commit], @user)
        ClearCMS::ContentLog.create(:user=>@user, :entry=>params[:commit], content: @content)
      end
      redirect_to content_history_trackers_path(@content)
    end

  end
end
