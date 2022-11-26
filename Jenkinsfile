pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/nrvpatel03/clicky-game', branch: 'master')
      }
    }

    stage('Update Pipeline Practice') {
      steps {
        sh 'ls -la'
      }
    }

  }
}