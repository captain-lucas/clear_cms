jQuery ->
  window.uploadsCount = 0
  $('#fileupload').fileupload
    add: (e, data) ->
      types = /(\.|\/)(gif|jpe?g|png)$/i
      file = data.files[0]
      if types.test(file.type) || types.test(file.name)
        data.context = $(tmpl("template-upload", file))
        $('#fileupload').append(data.context)
        data.submit()
        window.uploadsCount++
        ClearCMS.Interface.setStatus('uploads',window.uploadsCount)
      else
        alert("#{file.name} is not a gif, jpeg, or png image file")

    progress: (e, data) ->
      if data.context
        progress = parseInt(data.loaded / data.total * 100, 10)
        data.context.find('.bar').css('width', progress + '%')

    done: (e, data) ->
      upload_data=data
      file = data.files[0]
      domain = $('#fileupload').attr('action')
      path = $('#fileupload input[name=key]').val().replace('${filename}', file.name)
      to = $('#fileupload').data('post')
      content = {}
      content[$('#fileupload').data('as')] = domain + path
      $.post(to,
        content,
        (data, textStatus, jqXHR) ->
          ClearCMS.ImageQueue.addAsset(data,upload_data)
          upload_data.context.find('.progress').addClass('progress-warning progress-striped active')
          upload_data.context.find('.progress-bar').html('processing...')
      )
      #data.context.remove() if data.context # remove progress bar

    fail: (e, data) ->
      alert("#{data.files[0].name} failed to upload.")
      console.log("Upload failed:")
      console.log(data)
      window.uploadsCount--
      ClearCMS.Interface.setStatus('uploads',window.uploadsCount)
